import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7949Component } from './my-comp-7949.component';

describe('MyComp7949Component', () => {
  let component: MyComp7949Component;
  let fixture: ComponentFixture<MyComp7949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
