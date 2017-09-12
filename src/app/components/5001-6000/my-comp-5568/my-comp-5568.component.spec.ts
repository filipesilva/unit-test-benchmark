import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5568Component } from './my-comp-5568.component';

describe('MyComp5568Component', () => {
  let component: MyComp5568Component;
  let fixture: ComponentFixture<MyComp5568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
