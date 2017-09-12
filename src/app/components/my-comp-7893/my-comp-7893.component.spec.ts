import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7893Component } from './my-comp-7893.component';

describe('MyComp7893Component', () => {
  let component: MyComp7893Component;
  let fixture: ComponentFixture<MyComp7893Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7893Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
