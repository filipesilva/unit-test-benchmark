import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7761Component } from './my-comp-7761.component';

describe('MyComp7761Component', () => {
  let component: MyComp7761Component;
  let fixture: ComponentFixture<MyComp7761Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7761Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
