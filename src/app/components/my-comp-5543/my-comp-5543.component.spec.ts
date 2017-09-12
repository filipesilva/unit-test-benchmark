import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5543Component } from './my-comp-5543.component';

describe('MyComp5543Component', () => {
  let component: MyComp5543Component;
  let fixture: ComponentFixture<MyComp5543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
