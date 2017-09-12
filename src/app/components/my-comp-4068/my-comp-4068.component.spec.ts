import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4068Component } from './my-comp-4068.component';

describe('MyComp4068Component', () => {
  let component: MyComp4068Component;
  let fixture: ComponentFixture<MyComp4068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
