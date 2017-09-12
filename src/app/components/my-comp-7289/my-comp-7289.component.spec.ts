import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7289Component } from './my-comp-7289.component';

describe('MyComp7289Component', () => {
  let component: MyComp7289Component;
  let fixture: ComponentFixture<MyComp7289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
