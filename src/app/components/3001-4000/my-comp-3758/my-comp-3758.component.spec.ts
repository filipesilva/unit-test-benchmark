import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3758Component } from './my-comp-3758.component';

describe('MyComp3758Component', () => {
  let component: MyComp3758Component;
  let fixture: ComponentFixture<MyComp3758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
