import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5438Component } from './my-comp-5438.component';

describe('MyComp5438Component', () => {
  let component: MyComp5438Component;
  let fixture: ComponentFixture<MyComp5438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
