import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7008Component } from './my-comp-7008.component';

describe('MyComp7008Component', () => {
  let component: MyComp7008Component;
  let fixture: ComponentFixture<MyComp7008Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7008Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
