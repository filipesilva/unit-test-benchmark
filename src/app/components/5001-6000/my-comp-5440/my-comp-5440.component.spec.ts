import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5440Component } from './my-comp-5440.component';

describe('MyComp5440Component', () => {
  let component: MyComp5440Component;
  let fixture: ComponentFixture<MyComp5440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
