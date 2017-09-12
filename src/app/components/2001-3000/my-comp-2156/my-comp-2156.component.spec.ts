import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2156Component } from './my-comp-2156.component';

describe('MyComp2156Component', () => {
  let component: MyComp2156Component;
  let fixture: ComponentFixture<MyComp2156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
