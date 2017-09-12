import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4015Component } from './my-comp-4015.component';

describe('MyComp4015Component', () => {
  let component: MyComp4015Component;
  let fixture: ComponentFixture<MyComp4015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
