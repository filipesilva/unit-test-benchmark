import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7419Component } from './my-comp-7419.component';

describe('MyComp7419Component', () => {
  let component: MyComp7419Component;
  let fixture: ComponentFixture<MyComp7419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
