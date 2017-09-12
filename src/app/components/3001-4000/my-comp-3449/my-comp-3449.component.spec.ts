import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3449Component } from './my-comp-3449.component';

describe('MyComp3449Component', () => {
  let component: MyComp3449Component;
  let fixture: ComponentFixture<MyComp3449Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3449Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
