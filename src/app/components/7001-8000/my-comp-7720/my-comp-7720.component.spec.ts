import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7720Component } from './my-comp-7720.component';

describe('MyComp7720Component', () => {
  let component: MyComp7720Component;
  let fixture: ComponentFixture<MyComp7720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
