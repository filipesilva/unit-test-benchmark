import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3216Component } from './my-comp-3216.component';

describe('MyComp3216Component', () => {
  let component: MyComp3216Component;
  let fixture: ComponentFixture<MyComp3216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
