import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4440Component } from './my-comp-4440.component';

describe('MyComp4440Component', () => {
  let component: MyComp4440Component;
  let fixture: ComponentFixture<MyComp4440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
