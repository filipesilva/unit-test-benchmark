import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7165Component } from './my-comp-7165.component';

describe('MyComp7165Component', () => {
  let component: MyComp7165Component;
  let fixture: ComponentFixture<MyComp7165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
