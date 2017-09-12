import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7870Component } from './my-comp-7870.component';

describe('MyComp7870Component', () => {
  let component: MyComp7870Component;
  let fixture: ComponentFixture<MyComp7870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
