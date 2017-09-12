import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1006Component } from './my-comp-1006.component';

describe('MyComp1006Component', () => {
  let component: MyComp1006Component;
  let fixture: ComponentFixture<MyComp1006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
