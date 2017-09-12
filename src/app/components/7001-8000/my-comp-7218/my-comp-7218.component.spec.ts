import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7218Component } from './my-comp-7218.component';

describe('MyComp7218Component', () => {
  let component: MyComp7218Component;
  let fixture: ComponentFixture<MyComp7218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
