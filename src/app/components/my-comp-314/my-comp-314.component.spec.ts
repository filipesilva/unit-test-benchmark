import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp314Component } from './my-comp-314.component';

describe('MyComp314Component', () => {
  let component: MyComp314Component;
  let fixture: ComponentFixture<MyComp314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
