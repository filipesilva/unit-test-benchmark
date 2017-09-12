import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5098Component } from './my-comp-5098.component';

describe('MyComp5098Component', () => {
  let component: MyComp5098Component;
  let fixture: ComponentFixture<MyComp5098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
