import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7576Component } from './my-comp-7576.component';

describe('MyComp7576Component', () => {
  let component: MyComp7576Component;
  let fixture: ComponentFixture<MyComp7576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
