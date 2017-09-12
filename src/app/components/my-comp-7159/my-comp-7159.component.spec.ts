import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7159Component } from './my-comp-7159.component';

describe('MyComp7159Component', () => {
  let component: MyComp7159Component;
  let fixture: ComponentFixture<MyComp7159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
