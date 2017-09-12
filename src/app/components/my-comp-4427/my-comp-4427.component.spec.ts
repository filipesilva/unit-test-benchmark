import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4427Component } from './my-comp-4427.component';

describe('MyComp4427Component', () => {
  let component: MyComp4427Component;
  let fixture: ComponentFixture<MyComp4427Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4427Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4427Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
