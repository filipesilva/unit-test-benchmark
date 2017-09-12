import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3189Component } from './my-comp-3189.component';

describe('MyComp3189Component', () => {
  let component: MyComp3189Component;
  let fixture: ComponentFixture<MyComp3189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
