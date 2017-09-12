import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp156Component } from './my-comp-156.component';

describe('MyComp156Component', () => {
  let component: MyComp156Component;
  let fixture: ComponentFixture<MyComp156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
