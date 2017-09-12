import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5147Component } from './my-comp-5147.component';

describe('MyComp5147Component', () => {
  let component: MyComp5147Component;
  let fixture: ComponentFixture<MyComp5147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
