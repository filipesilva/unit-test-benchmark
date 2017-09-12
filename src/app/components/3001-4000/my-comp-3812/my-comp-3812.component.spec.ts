import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3812Component } from './my-comp-3812.component';

describe('MyComp3812Component', () => {
  let component: MyComp3812Component;
  let fixture: ComponentFixture<MyComp3812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
