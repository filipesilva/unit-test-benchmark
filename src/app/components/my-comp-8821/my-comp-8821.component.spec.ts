import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8821Component } from './my-comp-8821.component';

describe('MyComp8821Component', () => {
  let component: MyComp8821Component;
  let fixture: ComponentFixture<MyComp8821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
