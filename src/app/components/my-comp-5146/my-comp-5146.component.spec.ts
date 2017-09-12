import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5146Component } from './my-comp-5146.component';

describe('MyComp5146Component', () => {
  let component: MyComp5146Component;
  let fixture: ComponentFixture<MyComp5146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
