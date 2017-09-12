import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3349Component } from './my-comp-3349.component';

describe('MyComp3349Component', () => {
  let component: MyComp3349Component;
  let fixture: ComponentFixture<MyComp3349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
