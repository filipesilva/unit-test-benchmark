import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7593Component } from './my-comp-7593.component';

describe('MyComp7593Component', () => {
  let component: MyComp7593Component;
  let fixture: ComponentFixture<MyComp7593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
