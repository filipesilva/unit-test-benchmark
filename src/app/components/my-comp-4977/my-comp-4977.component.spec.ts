import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4977Component } from './my-comp-4977.component';

describe('MyComp4977Component', () => {
  let component: MyComp4977Component;
  let fixture: ComponentFixture<MyComp4977Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4977Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
