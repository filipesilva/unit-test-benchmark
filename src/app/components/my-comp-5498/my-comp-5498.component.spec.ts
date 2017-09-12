import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5498Component } from './my-comp-5498.component';

describe('MyComp5498Component', () => {
  let component: MyComp5498Component;
  let fixture: ComponentFixture<MyComp5498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
