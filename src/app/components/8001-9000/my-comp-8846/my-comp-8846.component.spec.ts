import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8846Component } from './my-comp-8846.component';

describe('MyComp8846Component', () => {
  let component: MyComp8846Component;
  let fixture: ComponentFixture<MyComp8846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
