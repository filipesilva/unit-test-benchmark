import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5461Component } from './my-comp-5461.component';

describe('MyComp5461Component', () => {
  let component: MyComp5461Component;
  let fixture: ComponentFixture<MyComp5461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
