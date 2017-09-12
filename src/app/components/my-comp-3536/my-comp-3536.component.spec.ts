import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3536Component } from './my-comp-3536.component';

describe('MyComp3536Component', () => {
  let component: MyComp3536Component;
  let fixture: ComponentFixture<MyComp3536Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3536Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3536Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
