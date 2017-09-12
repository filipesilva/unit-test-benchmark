import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3148Component } from './my-comp-3148.component';

describe('MyComp3148Component', () => {
  let component: MyComp3148Component;
  let fixture: ComponentFixture<MyComp3148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
