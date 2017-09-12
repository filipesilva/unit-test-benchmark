import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7087Component } from './my-comp-7087.component';

describe('MyComp7087Component', () => {
  let component: MyComp7087Component;
  let fixture: ComponentFixture<MyComp7087Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7087Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7087Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
