import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3996Component } from './my-comp-3996.component';

describe('MyComp3996Component', () => {
  let component: MyComp3996Component;
  let fixture: ComponentFixture<MyComp3996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
