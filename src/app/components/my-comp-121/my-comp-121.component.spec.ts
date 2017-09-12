import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp121Component } from './my-comp-121.component';

describe('MyComp121Component', () => {
  let component: MyComp121Component;
  let fixture: ComponentFixture<MyComp121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
