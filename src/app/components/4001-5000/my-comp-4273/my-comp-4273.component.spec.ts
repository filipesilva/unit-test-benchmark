import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4273Component } from './my-comp-4273.component';

describe('MyComp4273Component', () => {
  let component: MyComp4273Component;
  let fixture: ComponentFixture<MyComp4273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
