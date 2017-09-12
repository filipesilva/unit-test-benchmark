import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3855Component } from './my-comp-3855.component';

describe('MyComp3855Component', () => {
  let component: MyComp3855Component;
  let fixture: ComponentFixture<MyComp3855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
