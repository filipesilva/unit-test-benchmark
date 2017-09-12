import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5813Component } from './my-comp-5813.component';

describe('MyComp5813Component', () => {
  let component: MyComp5813Component;
  let fixture: ComponentFixture<MyComp5813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
