import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1821Component } from './my-comp-1821.component';

describe('MyComp1821Component', () => {
  let component: MyComp1821Component;
  let fixture: ComponentFixture<MyComp1821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
