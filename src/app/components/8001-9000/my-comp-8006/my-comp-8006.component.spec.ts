import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8006Component } from './my-comp-8006.component';

describe('MyComp8006Component', () => {
  let component: MyComp8006Component;
  let fixture: ComponentFixture<MyComp8006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
