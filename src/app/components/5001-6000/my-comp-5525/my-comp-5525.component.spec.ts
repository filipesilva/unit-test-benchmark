import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5525Component } from './my-comp-5525.component';

describe('MyComp5525Component', () => {
  let component: MyComp5525Component;
  let fixture: ComponentFixture<MyComp5525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
