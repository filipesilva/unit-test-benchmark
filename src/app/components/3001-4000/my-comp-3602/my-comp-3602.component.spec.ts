import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3602Component } from './my-comp-3602.component';

describe('MyComp3602Component', () => {
  let component: MyComp3602Component;
  let fixture: ComponentFixture<MyComp3602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
