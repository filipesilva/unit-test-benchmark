import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5249Component } from './my-comp-5249.component';

describe('MyComp5249Component', () => {
  let component: MyComp5249Component;
  let fixture: ComponentFixture<MyComp5249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
