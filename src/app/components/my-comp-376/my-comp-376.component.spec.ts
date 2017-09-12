import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp376Component } from './my-comp-376.component';

describe('MyComp376Component', () => {
  let component: MyComp376Component;
  let fixture: ComponentFixture<MyComp376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
