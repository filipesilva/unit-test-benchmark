import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5076Component } from './my-comp-5076.component';

describe('MyComp5076Component', () => {
  let component: MyComp5076Component;
  let fixture: ComponentFixture<MyComp5076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
